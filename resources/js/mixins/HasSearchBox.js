// import Geocoder from 'ol-geocoder'
import Geocoder from '@kirtandesai/ol-geocoder'

export default {
    mounted() {
        const search = this.field.search

        if (search.isEnabled && !this.isReadonly) {
            const geocoder = new Geocoder('nominatim', {
                provider: search.provider,
                key: search.apiKey || '',
                autoComplete: search.withAutocomplete,
                autoCompleteMinLength: search.autocompleteMinLength,
                autoCompleteTimeout: search.autocompleteTimeout,
                lang: search.language,
                placeholder: search.placeholder,
                targetType: search.boxType,
                limit: search.resultLimit,
                keepOpen: search.resultKeepOpen
            });

            geocoder.on('addresschosen', (evt) => {
                if (this.selectPointOnSearch) {
                    this.initValue = {
                        longitude: evt.coordinate[0],
                        latitude: evt.coordinate[1]
                    }

                    this.setValue(evt.coordinate[1], evt.coordinate[0])
                    geocoder.getSource().clear();
                }
                else {
                    this.isDirty = true
                }
            });

            this.$refs.map.map.addControl(geocoder)
        }
    }
}
