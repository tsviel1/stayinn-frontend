<template>
    <img :src="order.by.imgUrl">
</template>

<script>
export default {
    name: 'user-img',
    props: {
        order: Object
    },
}
</script>