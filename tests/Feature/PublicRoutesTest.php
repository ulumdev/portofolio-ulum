<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicRoutesTest extends TestCase
{
    /**
     * Test the homepage is accessible.
     */
    public function test_homepage_is_accessible(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Test the portfolio index page is accessible.
     */
    public function test_portfolio_index_is_accessible(): void
    {
        $response = $this->get('/portofolio');

        $response->assertStatus(200);
    }

    /**
     * Test the blog index page is accessible.
     */
    public function test_blog_index_is_accessible(): void
    {
        $response = $this->get('/blog');

        $response->assertStatus(200);
    }

    /**
     * Test the about page is accessible.
     */
    public function test_about_page_is_accessible(): void
    {
        $response = $this->get('/about');

        $response->assertStatus(200);
    }

    /**
     * Test the contact page is accessible.
     */
    public function test_contact_page_is_accessible(): void
    {
        $response = $this->get('/contact');

        $response->assertStatus(200);
    }
}
