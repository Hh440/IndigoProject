
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export const Home= ()=>{

    const navigate = useNavigate();
    return (

    
<div>
 <div classna="flex flex-col w-full min-h-dvh shadow-xl shadow-black">
  <header class="w-full bg-gray-700 py-4 px-6 flex items-center justify-between ">
    <a class="flex items-center gap-2" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-primary-foreground"
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
      </svg>
      <span class="text-lg font-medium text-white">Flight Management</span>
    </a>
    <nav class="hidden md:flex items-center gap-4 ">
      <a class="text-sm font-medium text-white hover:underline" href="#">
        Flights
      </a>
      <a href="#" class="text-sm font-medium text-white hover:underline">
        Notifications
      </a>
      <a class="text-sm font-medium text-white hover:underline" href="#">
        Settings
      </a>
    </nav>
  </header>
  <main class="flex-1">
    <section class="max-w-screen-2xl py-20 bg-gray-700">
      <div class="container px-4 md:px-6 flex flex-col items-center text-center">
        <h1 class="text-4xl font-bold text-white mb-4">Welcome to the Flight Management Panel</h1>
        <p class="text-lg text-white mb-8">
          Manage your flights, send notifications, and update flight details.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background 
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary 
          text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 flex items-center gap-2"
          onClick={()=>{navigate('/flightadd')}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
              
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Flight
          </button>
          <button class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background 
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white 
          text-black hover:bg-gray-200/80 h-11 rounded-md px-8 flex items-center gap-2"
          onClick={()=>{navigate('/notificationadd')}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
              
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            Send Notification
          </button>
          <button class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background 
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200/80 h-11 rounded-md px-8 flex items-center gap-2"
          
          onClick={()=>{navigate('/flightupdate')}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
              
            >
              <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
            </svg>
            Update Flight
          </button>
        </div>
      </div>
    </section>
    <section class="w-full py-20 bg-background">
      <div class="container px-4 md:px-6 flex flex-col items-center text-center">
        <div class="max-w-3xl mb-12">
          <h2 class="text-3xl font-bold mb-4">Key Features</h2>
          <p class="text-muted-foreground">
            The flight management panel provides tools to manage your flights, send notifications, and update flight
            details.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-card p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 mb-4 text-primary"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
            <h3 class="text-xl font-bold mb-2">Flight Management</h3>
            <p class="text-muted-foreground">Add, edit, and track your flight details.</p>
          </div>
          <div class="bg-card p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 mb-4 text-primary"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <h3 class="text-xl font-bold mb-2">Notifications</h3>
            <p class="text-muted-foreground">Send notifications to passengers and staff.</p>
          </div>
          <div class="bg-card p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 mb-4 text-primary"
            >
              <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
            </svg>
            <h3 class="text-xl font-bold mb-2">Flight Updates</h3>
            <p class="text-muted-foreground">Update flight details, such as</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="w-full bg-gray-700 py-6 px-4 md:px-6 flex items-center justify-between">
    <p class="text-sm text-primary-foreground">© 2024 Flight Management Panel. All rights reserved.</p>
    <nav class="flex items-center gap-4">
      <a class="text-sm font-medium text-primary-foreground hover:underline" href="#">
        Terms of Service
      </a>
      <a class="text-sm font-medium text-primary-foreground hover:underline" href="#">
        Privacy Policy
      </a>
    </nav>
  </footer>
  </div>
</div>
    )
}
