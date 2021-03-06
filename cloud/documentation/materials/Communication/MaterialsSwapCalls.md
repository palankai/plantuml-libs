# MaterialsSwapCalls
```text
elements/materials/Communication/MaterialsSwapCalls
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSwapCalls icon](../../../icons/materials/Communication/MaterialsSwapCalls.png) | ![MaterialsSwapCalls element](MaterialsSwapCalls.element.png) | ![MaterialsSwapCalls card](MaterialsSwapCalls.card.png) |
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

' loads the MaterialsSwapCalls element
include('elements/materials/Communication/MaterialsSwapCalls')
MaterialsSwapCalls('element', 'Swap Calls', 'an optional tech field')
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

' loads the MaterialsSwapCalls element
include('elements/materials/Communication/MaterialsSwapCalls')
MaterialsSwapCalls('element', 'Swap Calls', 'an optional tech field')
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

' loads the MaterialsSwapCalls card
include('elements/materials/Communication/MaterialsSwapCalls')
MaterialsSwapCallsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSwapCalls card
include('elements/materials/Communication/MaterialsSwapCalls')
MaterialsSwapCallsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
