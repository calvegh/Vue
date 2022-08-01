<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another="..."></slot>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            goals:['Finish the coure','Learn vue']
        }
    }
}
</script>