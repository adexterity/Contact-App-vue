<script >
   export default{

     props:{
       contacts: Object
      },
setup(props, {emit}){

  function openContactField() {
     emit("open");
  };
  

  return{
    openContactField
  }
  }      
}
             
          
        
        </script>

<template>

  <!-- content container -->
  <div class="container">
    <header>
      <h2 class="font-bold inline-block mr-2">Phone Directory</h2>
      <button class="btn" @click="openContactField">New</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, odit?
        Quisquam aut rerum dolor illum quos quis labore architecto vitae?
      </p>
      <input
        type="search"
        placeholder="search contact"
        class="bg-white placeholder outline-0 mr-2 p-1 placeholder-center"
      />
      <input
        type="button"
        
        value="search"
        class="border border-gray-800 rounded px-4 py-1 cursor-pointer"
      />
    </header>
    <!-- main section -->
    <main class="pt-10">
      <div class="contacts">
        <div class="card bg-white flex items-center">
          <img src="../assets/avatars/download.png" alt="avatar" class="" />
          <div>
            <p class="border">Name: Joseph Brad</p>
            <p class="border">Mobile: 09034874392</p>
            <p class="border">Email: opensesame4me@gmail.com</p>
          </div>
          <div class="ml-2">
            <span class="block bg-yellow-400 text-center px-1 mb-1"
              ><i class="fa-solid fa-eye"></i
            ></span>
            <span class="block bg-blue-500 text-center px-1"
              ><i class="fa-solid fa-pen-to-square text-white"></i
            ></span>
            <span class="block bg-red-500 text-center px-1 mt-1"
              ><i class="fa-solid fa-trash text-white"></i
            ></span>
          </div>
        </div>
      </div>
      
    </main>
  </div>
</template>
<style scoped></style>
