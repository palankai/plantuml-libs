# MaterialsVisibilityOff
```text
elements/materials/Action/MaterialsVisibilityOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVisibilityOff icon](../../../icons/materials/Action/MaterialsVisibilityOff.png) | ![MaterialsVisibilityOff element](MaterialsVisibilityOff.element.png) | ![MaterialsVisibilityOff card](MaterialsVisibilityOff.card.png) |
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

' loads the MaterialsVisibilityOff element
include('elements/materials/Action/MaterialsVisibilityOff')
MaterialsVisibilityOff('element', 'Visibility Off', 'an optional tech field')
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

' loads the MaterialsVisibilityOff element
include('elements/materials/Action/MaterialsVisibilityOff')
MaterialsVisibilityOff('element', 'Visibility Off', 'an optional tech field')
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

' loads the MaterialsVisibilityOff card
include('elements/materials/Action/MaterialsVisibilityOff')
MaterialsVisibilityOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVisibilityOff card
include('elements/materials/Action/MaterialsVisibilityOff')
MaterialsVisibilityOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
