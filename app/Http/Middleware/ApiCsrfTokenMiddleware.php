<?php

namespace App\Http\Middleware;

use Closure;
use http\Cookie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\Middleware;
use Symfony\Component\HttpFoundation\Response;

class ApiCsrfTokenMiddleware extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // Set a separate CSRF token cookie for API requests.
        $cookie = new Cookie('XSRF-TOKEN', $request->session()->token(), 0, null, 'localhost:3000');
        $request->cookieJar->set($cookie);

        return $next($request);
    }

}
