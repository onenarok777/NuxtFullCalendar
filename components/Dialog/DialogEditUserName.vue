<template>
  <UModal v-model="props.open">
    <UCard>
      <template #header>
        <div class="flex">
          <div class="flex-1">Edit User</div>
          <div class="flex-none">
            <UButton
              :padded="false"
              class="rounded-full hover:bg-red-100"
              variant="ghost"
              :disabled="isLoadingBtnSave"
              @click="onCloseDialog"
            >
              <Icon name="iconamoon:close" color="red" size="20"></Icon>
            </UButton>
          </div>
        </div>
      </template>
      <UFormGroup label="User Name">
        <UInput :disabled="isLoadingBtnSave" v-model="userName" />
      </UFormGroup>
      <template #footer>
        <div class="flex">
          <div class="ml-auto">
            <UButton
              label="บันทึก"
              :disabled="!userName ? true : false"
              :loading="isLoadingBtnSave"
              @click="onSave"
            />
          </div>
        </div>
      </template>
    </UCard>
  </UModal>
</template>
<script setup>
const emit = defineEmits(["close", "callback"]);

const props = defineProps({
  open: Boolean,
  userName: String,
});

const userName = ref(props.userName || null);

const isLoadingBtnSave = ref(false);

const onCloseDialog = () => {
  emit("close", false);
};

const onSave = async () => {
  isLoadingBtnSave.value = true;
  await localStorage.setItem("userName", userName.value);
  isLoadingBtnSave.value = false;
  await emit("callback", {
    userName: userName.value,
    open: false
  });
};
</script>
