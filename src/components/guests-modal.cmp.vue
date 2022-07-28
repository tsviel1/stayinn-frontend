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
                    <button :disabled="getAdultsNum <= 0" class="btn-round" @click="setAdults(-1)">-</button>
                    <span>{{ getAdultsNum }}</span>
                    <button :disabled="getAdultsNum >= 10" class="btn-round" @click="setAdults(1)">+</button>
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
                    <button :disabled="getChildrenNum <= 0" class="btn-round" @click="setChildren(-1)">-</button>
                    <span>{{ getChildrenNum }}</span>
                    <button :disabled="getChildrenNum >= 10" class="btn-round" @click="setChildren(1)">+</button>
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
            childrenCounter: 0,
            adultsCounter: 0,
        }
    },
    computed: {
        getAdultsNum() {
            return this.$store.getters.getAdultsNum
        },
        getChildrenNum() {
            return this.$store.getters.getChildrenNum
        }
    },
    methods: {
        setAdults(diff) {
            const adultsNum = this.getAdultsNum
            const newAdultsNum = adultsNum + diff
            this.$store.commit({ type: 'setAdults', newAdultsNum })
        },
        setChildren(diff) {
            const childrenNum = this.getChildrenNum
            const newChildrenNum = childrenNum + diff
            console.log(diff);
            console.log(childrenNum);
            this.$store.commit({ type: 'setChildren', newChildrenNum })
            
        },
    }

}
</script>

<style lang="sass" scoped>

</style>