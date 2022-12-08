<?php

namespace Mostafaznv\NovaMapField\Fields;

use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;
use MatanYadaev\EloquentSpatial\Objects\Point;
use MatanYadaev\EloquentSpatial\Objects\LineString;
use Mostafaznv\NovaMapField\Rules\PointRequiredRule;
use Mostafaznv\NovaMapField\Traits\WithMapProps;

class MapLineStringField extends Field
{
    use WithMapProps;

    public $component = 'nova-map-field';

    private string $mapType = 'LINESTRING';

    
}
