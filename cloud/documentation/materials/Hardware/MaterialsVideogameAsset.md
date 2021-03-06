# MaterialsVideogameAsset
```text
elements/materials/Hardware/MaterialsVideogameAsset
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVideogameAsset icon](../../../icons/materials/Hardware/MaterialsVideogameAsset.png) | ![MaterialsVideogameAsset element](MaterialsVideogameAsset.element.png) | ![MaterialsVideogameAsset card](MaterialsVideogameAsset.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVideogameAsset element
include('elements/materials/Hardware/MaterialsVideogameAsset')
MaterialsVideogameAsset('element', 'Videogame Asset', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVideogameAsset element
include('elements/materials/Hardware/MaterialsVideogameAsset')
MaterialsVideogameAsset('element', 'Videogame Asset', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVideogameAsset card
include('elements/materials/Hardware/MaterialsVideogameAsset')
MaterialsVideogameAssetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVideogameAsset card
include('elements/materials/Hardware/MaterialsVideogameAsset')
MaterialsVideogameAssetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
