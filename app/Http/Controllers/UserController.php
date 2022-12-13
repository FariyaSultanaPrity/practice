<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Address;
use App\Models\Seller;
use App\Models\Token;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegistrationConfirm;
use DateTime;
use Session;



class UserController extends Controller
{
    public function login(){
        return view('User.login');
    }
    
    public function loginSubmit(Request $request){

        $validate = $request->validate([
            "User_Email"=>"required",
            'Password'=>'required'
            
        ]
        
    );
        $user = User::where('U_Email',$request->User_Email)
                            ->where('U_Pass',$request->Password)
                            ->first();
                           
    
        if($user){
            $request->session()->put('user',$user->U_Name);
            $request->session()->put('User_Id',$user->id);


            $seller=$user->seller;
            if($seller){
            $request->session()->put('Seller_Id',$seller->id);
            $request->session()->put('Bank',$seller->S_bankName);
            $request->session()->put('Account',$seller->S_accountNo);
            }
            return redirect()->route('dash');
        }
        return back();
    }
    public function Logout(){
        session()->forget('user');
        session()->forget('User_Id');
        session()->forget('Seller_Id');
        session()->forget('Bank');
        session()->forget('Account');
        return redirect()->route('login');
    }

    public function home(){
        return view('User.home');
    }

    public function dash(){
        return view('User.dash');
    }


public function seller(){
    
   
    return view('User.seller');
   }

   public function sellerSubmit(Request $request){



      $validate = $request->validate([
           
            'Account_Number'=>'required',
            
            'Bank_Name'=>'required'
          
        ]
        
    );

       
     



        $seller= new Seller();
        $seller->S_bankName=$request->Bank_Name;
        $seller->S_accountNo=$request->Account_Number;
        $seller->U_Id=Session::get('User_Id');
       

        $result=$seller->save();

      
      
            if($result){
                $request->session()->put('Seller_Id',$seller->id);
            $request->session()->put('Bank',$seller->S_bankName);
            $request->session()->put('Account',$seller->S_accountNo);
             
                return redirect()->route('dash');
            }
            else{
               return ('failed!please try again!');
            }

             
         }


         public function  apilogin(Request $request){

            $user = User::where('U_Email',$request->U_Email)
            ->where('U_Pass',$request->U_Pass)
            ->first();
            
            if($user){
                $api_token = Str::random(64);
                $token =new Token();
                $token->U_Id = $user->id;
                $token->tokenn = $api_token;
                $token->create_at = new DateTime();
                $token->save();
                return $token;
            }
            return "No user found";
    
        }
        public function  apilogout(Request $req){
    
            $token = Token::where('tokenn',$req->token)->first();
            if($token){
                $token->expire_at =new DateTime();
                $token->save();
                return $token;
            }
    
        }
        public function  apicheckTokenExpire(Request $req){
           
           
            $token = Token::where('tokenn',$req->access_token)->where('expire_at',NULL)->first();
            if($token){
              
                return $token;
            }
            else{
                return "expierd";
            }
    
        }

        public function APIRegistration(Request $req){
 
            $address = new  Address();
            $address->Localaddress= $req->LocalAddress;
            $address->PoliceStation= $req->PoliceStation;
            $address->City= $req->City;
            $address->Country= $req->Country;
            $address->ZipCode= $req->ZipCode;
                
            $address->save();
         
         
            $user = new  User();
            $user->U_Name = $req->U_Name;
            $user->U_AddressId = $address->id;
            $user->U_Email = $req->U_Email;
            $user->U_Pass = $req->U_Pass;
            $user->U_Phn = $req->U_Phn;
            $user->U_Dob = $req->U_Dob;
            $user->U_Gender = $req->U_Gender;
            $user->U_Photo=$req->U_Photo;
            $user->status=0;
            $code = rand(1000,9000);
            $details = [
                'title' => 'Registration Confirmation',
                'code' => $code
            ];
            
            $user->U_otp = $code;
            Mail::to($req->U_Email)->send(new RegistrationConfirm($details));
            $result = $user->save();
    
            if($result){

              
                return response()->json([
                    'message'=>'Registration Successful. An otp send in your Email.'
                ]);
            }
            else{
              
                return response()->json([
                    'message'=>'Registration Failed'
                ]);
            }
        }

        public function APIDash(){
 
            
        }



        }
