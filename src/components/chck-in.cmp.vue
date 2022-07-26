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
            <el-date-picker class="date-picker-container" v-model="tripDates" type="daterange" @change="setTripDates"
                range-separator="To" start-placeholder="Start date" end-placeholder="End date" />
        </label>
    </section>
</template>

<script>
export default {

}
</script>

<style>
   .date-picker-container {
        z-index: 1 !important;
        position: fixed !important;
        opacity: 0 !important;
        width: 270px !important;
    }
    .el-date-table td.available:hover {
        color: black !important;
    }


    .start-date.in-range .el-date-table-cell .el-date-table-cell__text{
        background: black;
    }

    .end-date.in-range .el-date-table-cell .el-date-table-cell__text{
        background: black;
    }

</style>