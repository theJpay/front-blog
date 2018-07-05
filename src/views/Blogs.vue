<template>
    <div>
        <div class="presentation">
            <h1>This where I will display my blogs</h1>
        </div>
        {{ index }}
    </div>
</template>

<script>
import index from "../assets/example/index.json";

export default {
  name: "Blogs",
  data() {
    return {
      index: JSON.parse(JSON.stringify(index))
    };
  }
};
</script>
