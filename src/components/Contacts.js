import React from 'react'

function Contacts() {
  return (
    <div>

<body class="bg-black text-white" id="ref4">
    <div class="container mx-auto py-8">
        <div class="flex justify-center items-center">
            <div class="text-center">
                <h1 class="text-4xl font-bold">Contact Me</h1>
                <br></br>
                <p>Email: vssaikrishna2003@gmail.com</p>
                <p>Phone: +91-8791614097</p>
                <div class="flex mt-4 space-x-4 p-3 px-14">
                    <a href="https://instagram.com/sai_.215?igshid=NzZlODBkYWE4Ng==" target="_blank" class="text-white hover:text-blue-500">
                    <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>                    </a>
                    <a href="https://www.linkedin.com/in/sai-krishna-kanth-vs-97112523b" target="_blank" class="text-white hover:text-blue-500">
                    <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>                    </a>
                    <a href="https://github.com/krishnasai215" target="_blank" class="text-white hover:text-blue-500">
                    <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>                    </a>
                </div>
            </div>
            <form class="ml-8">
                <h2 class="text-2xl font-bold mb-4">Query Form</h2>
                <div class="mb-4"><a> Name</a>
                    <input type="text" placeholder="Sai krishna" class="bg-gray-800 w-full p-2 rounded-lg text-white" required></input>
                </div>
                <div class="mb-4"><a>Email</a>
                    <input type="email" placeholder="your@email.com" class="bg-gray-800 w-full p-2 rounded-lg text-white" required></input>
                </div>
                <div class="mb-4"><a>Phone No.</a>
                    <input type="tel" placeholder="+99-1234567890" class="bg-gray-800 w-full p-2 rounded-lg text-white" required></input>
                </div>
                <div class="mb-4"><a>Comment</a>
                    <textarea placeholder="Leave me a message..." class="bg-gray-800 w-full p-2 rounded-lg text-white" rows="4" required></textarea>
                </div>
                <button class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-lg">Submit</button>
            </form>
        </div>
    </div>
</body>

    </div>
  )
}

export default Contacts
