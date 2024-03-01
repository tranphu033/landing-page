<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function create(Request $req) {
        $newContact= $req->all();
        Contact::create($newContact);

        return response()->json("created successfully");
    }
}
