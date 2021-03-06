# MaterialsVpnKey
```text
elements/materials/Communication/MaterialsVpnKey
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVpnKey icon](../../../icons/materials/Communication/MaterialsVpnKey.png) | ![MaterialsVpnKey element](MaterialsVpnKey.element.png) | ![MaterialsVpnKey card](MaterialsVpnKey.card.png) |
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

' loads the MaterialsVpnKey element
include('elements/materials/Communication/MaterialsVpnKey')
MaterialsVpnKey('element', 'Vpn Key', 'an optional tech field')
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

' loads the MaterialsVpnKey element
include('elements/materials/Communication/MaterialsVpnKey')
MaterialsVpnKey('element', 'Vpn Key', 'an optional tech field')
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

' loads the MaterialsVpnKey card
include('elements/materials/Communication/MaterialsVpnKey')
MaterialsVpnKeyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVpnKey card
include('elements/materials/Communication/MaterialsVpnKey')
MaterialsVpnKeyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
