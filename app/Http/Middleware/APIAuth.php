<?php

namespace App\Http\Middleware;
use App\Models\Token;
use Closure;

class APIAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->header("Authorization");
        
        $token2 = json_decode($token);
        $check_token = Token::where('tokenn',$token2->access_token)->where('expire_at',NULL)->first();
        if ($check_token) {
            return $next($request);

        }
        else return response("Invalid token",401);
    }
}
