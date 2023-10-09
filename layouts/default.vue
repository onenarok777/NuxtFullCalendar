<template>
  <div class="container mx-auto px-4">
    <div class="navbar">
      <div class="ml-auto">
        <UDropdown :items="listSetting">
          <h4>{{ userName }}</h4>
          <Icon name="mdi:gear-outline" size="30" />
        </UDropdown>
      </div>
    </div>
    <slot />
    <DialogEditUserName
      :open="openDialogEditUsername"
      :userName="userName"
      @close="openDialogEditUsername = false"
      @callback="callBack"
    />
  </div>
</template>
<script setup>
const openDialogEditUsername = ref(false);
const userName = ref(localStorage.getItem("userName") || null);

const listSetting = [
  [
    {
      label: "แก้ไข Username",
      click: () => {
        openDialogEditUsername.value = true;
      },
    },
  ],
];

const callBack = (res) => {
  userName.value = res.userName;
  openDialogEditUsername.value = res.open;
};
console.log(useNuxtApp);
</script>
