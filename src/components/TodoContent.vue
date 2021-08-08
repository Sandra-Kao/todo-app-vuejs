<template>
  <section>
    <div class="todo-content">
      <div class="todo-content__outer-1000 content-wrapper">
        <h1>
          Let's do this
          <span>Get things done, one item at a time.</span>
        </h1>

        <main>
          <ul class="todo-content__outer-1000">
            <li
              class="todo-content__item-line"
              v-for="todo in todos"
              :key="todo.item"
            >
              <p class="padding-helf">
                <i class="far fa-circle" :class="{ checked: todo.isDone }"></i>
                <span>{{ todo.item }}</span>
              </p>
            </li>
          </ul>
          <div class="todo-content__add-wrapper">
            <!-- <div class="todo-content__add-input active">
              <i class="fas fa-location-arrow"></i>
              <i class="far fa-paper-plane"></i>
              <i class="fas fa-feather-alt"></i>
            </div> -->

            <!-- <input
              type="text"
              value="123"
              placeholder="456"
              class="todo-content__add-input active"
            /> -->

            <router-link to="/newtodo">
              <button class="todo-content__add-btn">
                <i class="fas fa-plus"></i></button
            ></router-link>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import $store from "@/store/index.js";
export default {
  name: "TodoContent",
  props: {},
  mounted() {
    console.table(this.todos);
  },
  computed: {
    todos() {
      return $store.state.todos;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-content {
  display: flex;
  justify-content: space-around;
}
.todo-content__outer-1000 {
  width: 100%;
  max-width: 1000px;
  // background: var(--color-primary-base);
}
.todo-content h1 {
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.todo-content h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}

.todo-content ul {
  margin-top: 2.6rem;
  list-style: none;
  font-size: 1.3rem;
  background: var(--color-primary-base);
  padding: 50px;
  border-radius: 10px;
  min-height: 70vh;
}

.todo-content__item-line {
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1rem 5rem;
  background: var(--color-primary-darkest);
  border-radius: 25px;
  margin-bottom: 1rem;
}
.todo-content__item-line p {
  transition: 0.1s ease-out;
  width: 100%;
}
.todo-content__item-line p:hover {
  cursor: pointer;
  color: var(--color-white);
}
.todo-content__item-line p:focus,
.todo-content__item-line p:active {
  color: var(--color-primary-light);
}

.todo-content__item-line i {
  position: relative;
  margin-right: 1rem;
}
.todo-content__item-line i::after {
  content: "";
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 1rem;
}
.todo-content__item-line i.checked::after {
  content: "\f058";
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 1rem;
}

.todo-content__add-input,
.todo-content__add-input i {
  visibility: hidden;
  opacity: 0;
}
.todo-content__add-input.active,
.todo-content__add-input.active i {
  visibility: visible;
  opacity: 1;
}

.todo-content__add-input {
}

button.todo-content__add-btn {
  display: block;
  font-size: 1.5rem;
  width: 4rem;
  height: 4rem;
  background: var(--color-spotlight-purple);
  border-radius: 100%;
  // position: absolute;
  // transform: translate(-50%, -50%);
  // right: 20%;
  // bottom: 4rem;
  color: var(--color-white);
  border: transparent;
}
button.todo-content__add-btn:hover {
  cursor: pointer;
  color: var(--color-white);
}
button.todo-content__add-btn p:focus,
button.todo-content__add-btn p:active {
  color: var(--color-primary-light);
}
</style>
