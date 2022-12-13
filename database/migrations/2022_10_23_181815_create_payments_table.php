<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id')->start_from(5000);

        $table->Integer('Auction_id')->nullable();

        $table->Integer('Customer_id')->nullable();

        $table->Integer('Account_No')->nullable();

        $table->Integer('Verification_Status')->default('0');

        $table->string('Payment_Recipt')->nullable();
        $table->timestamps();

       
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
