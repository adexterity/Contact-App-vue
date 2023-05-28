<script>
export default {
  name: "Form",
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputNum: "",
      inputComp: "",
      inputTitle: "",
      inputGroup: null,
      todos: [],
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    showName() {
      console.log(this.inputName);
    },
    todo() {
      this.todos.push({
        name: this.inputName,
        email: this.inputEmail,
        number: this.inputNum,
        company: this.inputComp,
        title: this.inputTitle,
        group: this.inputGroup,
      });

      this.closeModal();
    },
  },
};
</script>

<template>
  <div
    class="overlay absolute t-0 l-0 w-full h-full flex justify-center items-center"
    @click.self="closeModal"
  >
    <div class="py-2 px-1 flex justify-center items-center flex-col">
      <h2 class="text-green-600 font-bold text-xl md:text-4xl">
        Create Contact
      </h2>
      <p class="pt-2 pb-10">please fill in the form to create a contact</p>
      <form @submit.prevent="todo">
        <input
          type="text"
          placeholder="Name"
          required
          class="field"
          v-model="inputName"
        />
        <input type="text" placeholder="Photo url" class="field" />
        <input
          type="number"
          placeholder="Mobile"
          required
          class="field"
          v-model="inputNum"
        />
        <input
          type="text"
          placeholder="Email"
          required
          class="field"
          v-model="inputEmail"
        />
        <input
          type="text"
          placeholder="Company"
          class="field"
          v-model="inputComp"
        />
        <input
          type="text"
          placeholder="Title"
          class="field"
          v-model="inputTitle"
        />

        <select class="field w-48" v-model="inputGroup">
          <option value="" selected disabled>Select group</option>
          <option value="partner">partner</option>
          <option value="friend">friend</option>
          <option value="family">family</option>
          <option value="business">business</option>
        </select>
        <div class="btns mt-5">
          <input type="submit" value="Create" class="btn" />
          <input
            type="button"
            value="Cancel"
            class="btn2"
            @click="closeModal"
          />
        </div>
      </form>
      <p>name: {{ inputName }}</p>
    </div>
  </div>
</template>

<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
}
</style>
