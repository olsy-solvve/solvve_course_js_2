<template>
  <div>
    <div class="col-12">
      <ul class="list-none p-0 m-0 flex font-medium mb-3">
        <li>
          <a class="text-500 no-underline line-height-3 cursor-pointer">Home</a>
        </li>
        <li>
          <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
          <span class="text-900 line-height-3">Profile</span>
        </li>
      </ul>
      <div class="w-full flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
          <div class="font-medium text-3xl text-blue-500">User Profile</div>
          <div class="flex text-700 flex-wrap">
            <div class="mr-5 flex align-items-center mt-1">
              <i class="pi pi-users mr-2"></i>
              <span>332 Active Users</span>
            </div>
            <div class="mr-5 flex align-items-center mt-1">
              <i class="pi pi-globe mr-2"></i>
              <span>9402 Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 lg:col-5">
        <div class="p-3 h-full">
          <div class="shadow-2 p-5 h-full flex flex-column surface-card" style="border-radius: 1px">
            <div class="col-12 md:col-4">
              <div class="card">
                <pAvatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2"
                  size="xlarge" shape="circle" />
              </div>
            </div>

            <div class="text-900 font-medium text-xl mb-2">User Name</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center">
              <span class="ml-2 font-medium text-600">Online</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-blue-500 mr-2"></i>
                <span>Age</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-blue-500 mr-2"></i>
                <span>Country</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-blue-500 mr-2"></i>
                <span>Email</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-7">
        <div class="p-3 h-full">
          <div class="shadow-2 p-5 h-full flex flex-column surface-card" style="border-radius: 6px">
            <div class="text-900 font-medium text-xl mb-2">Number1</div>
            <div class="text-600">The user has won</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center"></div>
            <div class="text-900 font-medium text-xl mb-2">Number2</div>
            <div class="text-600">The user has lost</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<!--<style lang="scss" scoped>
.m-auto {
  margin: auto;
}
</style>
-->
