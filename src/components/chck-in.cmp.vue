<template>
    <section class="chck-in">
        <label class="search-middle-section">
            <div class="search-section">
                <div class="search-head">Check in</div>
                <div class="search-sub">Add dates</div>
            </div>
            <div class="break-point"></div>
            <div class="search-section">
                <div class="search-head">Check out</div>
                <div class="search-sub">Add dates</div>
            </div>
            <el-date-picker class="date-picker" v-model="tripDates" type="daterange" @change="setTripDates"
                range-separator="To" start-placeholder="Start date" end-placeholder="End date" />
        </label>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>