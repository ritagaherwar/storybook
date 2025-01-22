<template>
    <button
      :class="buttonClass"
      @click="handleClick"
      :disabled="disabled"
    >
      {{ label }}
    </button>
  </template>
  
  <script lang="ts">
//   import { defineComponent, PropType } from "vue";
  
  export default defineComponent({
    name: "RaniumButton",
    props: {
      label: {
        type: String,
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      variant: {
        type: String as PropType<"primary" | "secondary" | "danger">,
        default: "primary",
      },
    },
    setup(props, { emit }) {
      const handleClick = () => {
        if (!props.disabled) {
          emit("click");
        }
      };
  
      const buttonClass = computed(() => {
        return `btn btn-${props.variant}`;
      });
  
      return {
        handleClick,
        buttonClass,
      };
    },
  });
  </script>
  
  <style>
  .btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
  }
  
  .btn:disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
  }
  </style>
  