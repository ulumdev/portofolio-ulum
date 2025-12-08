<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display contact form
     */
    public function index()
    {
        // return view('contact');
        return Inertia::render('Public/Contact');
    }

    /**
     * Store contact message
     */
    public function store(StoreContactMessageRequest $request)
    {
        $message = ContactMessage::create($request->validated());

        // Send email notification (optional)
        // You can create a Mailable class for this
        // Mail::to(config('mail.from.address'))->send(new ContactFormSubmitted($message));

        //     return redirect()->route('contact.index')
        //         ->with('success', 'Thank you for your message! I will get back to you soon.');
        // }

        return redirect()->back()->with('success', 'Thank you for your message! I will get back to you soon.');
    }
}
