<template>
  <section>
    <button @click="isShown = !isShown">
      <i class="fas fa-ellipsis-h"></i> Filters
    </button>

    <form v-if="isShown" @submit.prevent="setFilterBy">
      <div>
        <h3>Price Range</h3>
        <el-slider v-model.number="filterBy.price" range :min="10" :max="1000" @change="onFilterPrice($event)" />
      </div>
      <form @submit.prevent="onFilterBeds($event)">
        <p>Bedrooms</p>
        <input type="radio" id="room-one" value="1" v-model.number="filterBy.bedrooms"
          @change="onFilterBedroom($event)" />
        <label for="room-one">1</label>

        <input type="radio" id="room-two" value="2" @change="onFilterBedroom($event)"
          v-model.number="filterBy.bedrooms" />
        <label for="room-two">2</label>
        <input type="radio" id="room-three" value="3" @change="onFilterBedroom($event)"
          v-model.number="filterBy.bedrooms" />
        <label for="room-three">3</label>

        <input type="radio" id="room-four" value="4" @change="onFilterBedroom($event)"
          v-model.number="filterBy.bedrooms" />
        <label for="room-four">4</label>
        <input type="radio" id="room-five" value="5" @change="onFilterBedroom($event)"
          v-model.number="filterBy.bedrooms" />
        <label for="room-five">5</label>

        <input type="radio" id="room-six" value="6" @change="onFilterBedroom($event)"
          v-model.number="filterBy.bedrooms" />
        <label for="room-six">6+</label>

      </form>

      <form @submit.prevent="onFilterBeds($event)">
        <p>Beds</p>
        <input type="radio" id="any-bed" :value="false" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="any-bed">Any</label>
        <input type="radio" id="bed-one" value="1" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="bed-one">1</label>

        <input type="radio" id="bed-two" value="2" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="bed-two">2</label>
        <input type="radio" id="bed-three" value="3" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="bed-three">3</label>

        <input type="radio" id="bed-four" value="4" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="bed-four">4</label>
        <input type="radio" id="bed-five" value="5" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="bed-five">5</label>

        <input type="radio" id="bed-six" value="6" v-model.number="filterBy.beds" @change="onFilterBed($event)" />
        <label for="bed-six">6+</label>
      </form>
      <form v-for="amenity in amenities">
        <input type="checkbox" :id="amenity">
        <label :for="amenity"></label>
      </form>
      <button>Show Results</button>
    </form>

  </section>
</template>
 <script>
export default {
  name: 'stay-filter',
  components: {},
  data() {
    return {
      isShown: false,
      filterBy: {
        price: null,
        bedrooms: null,
        beds: null,

      }
    };
  },
  created() { },
  methods: {
    onFilterBedroom(ev) {
      console.log(ev);
      this.filterBy.bedrooms = ev.target._value
      console.log(this.filterBy.bedrooms);
    },
    onFilterBed(ev) {
      if(this.filterBy.beds){
        this.filterBy.beds = ev.target._value
      }else{
        this.filterBy.beds=null
      }

      console.log(typeof this.filterBy.beds,'yo');
    },
    onFilterPrice(ev) {
      console.log(ev);
      const price = {
        min: ev[0],
        max: ev[1]
      }
      this.filterBy.price = price
      console.log(price);
    },
    setFilterBy() {
      this.$store.commit({
        type: 'setFilter',
        filterBy: {...this.filterBy}
      })
      this.$store.dispatch({type:"loadStays", filterBy: {...this.filterBy}})
    }
  },
  computed: {},
  unmounted() { },
};
</script>
 <style>
 </style>