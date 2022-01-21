<template>
  <div>
    <div class="flex gap-3 flex-col">
      <div>
        <vs-input placeholder="Title" label="Title" />
      </div>
      <div>
        <vs-input placeholder="Description" label="Description" />
      </div>
      <div class="flex gap-4">
        <vs-select class="selectExample" label="Figuras" v-model="select1">
          <vs-select-item value="aa" text="aa" />
          <vs-select-item value="aa" text="aa" />
          <vs-select-item value="aa" text="aa" />
          <vs-select-item value="aa" text="aa" />
        </vs-select>
        <vs-select class="selectExample" label="Figuras" v-model="select1">
          <vs-select-item value="aa" text="aa" />
          <vs-select-item value="aa" text="aa" />
          <vs-select-item value="aa" text="aa" />
          <vs-select-item value="aa" text="aa" />
        </vs-select>
      </div>
    </div>
    <vs-button class="my-5 w-full"> Add task </vs-button>
  </div>
</template>
