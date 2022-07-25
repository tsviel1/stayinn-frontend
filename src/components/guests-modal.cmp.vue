<template>
        <div class="guests-modal">
            <section>
                <div class="guests-type">
                    <div class="guests-type-view">
                        <div class="title">
                            Adults
                        </div>
                        <div class="second-title">
                            Ages 13 or above
                        </div>
                    </div>
                    <div class="guests-type-selection">
                        <button :disabled="adultsCounter <= 0" class="btn-round" @click="adultsCounter--">-</button>
                        <span>{{ adultsCounter }}</span>
                        <button :disabled="adultsCounter >= 10" class="btn-round" @click="adultsCounter++">+</button>
                    </div>
                </div>
                <div class="guests-type">
                    <div class="guests-type-view">
                        <div class="title">
                            Children
                        </div>
                        <div class="second-title">
                            Ages 2-12
                        </div>
                    </div>
                    <div class="guests-type-selection">
                        <button :disabled="kidsCounter <= 0" class="btn-round" @click="kidsCounter--">-</button>
                        <span>{{ kidsCounter }}</span>
                        <button :disabled="kidsCounter >= 10" class="btn-round" @click="kidsCounter++">+</button>
                    </div>
                </div>
            </section>
        </div>


</template>

<script>
export default {
    name: 'guests-modal',
    data() {
        return {
            kidsCounter: 0,
            adultsCounter: 0
        }
    }

}
</script>

<style lang="sass" scoped>

</style>