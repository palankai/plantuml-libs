# MaterialsTabUnselected
```text
elements/materials/Action/MaterialsTabUnselected
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTabUnselected icon](../../../icons/materials/Action/MaterialsTabUnselected.png) | ![MaterialsTabUnselected element](MaterialsTabUnselected.element.png) | ![MaterialsTabUnselected card](MaterialsTabUnselected.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsTabUnselected element
include('elements/materials/Action/MaterialsTabUnselected')
MaterialsTabUnselected('element', 'Tab Unselected', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsTabUnselected element
include('elements/materials/Action/MaterialsTabUnselected')
MaterialsTabUnselected('element', 'Tab Unselected', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsTabUnselected card
include('elements/materials/Action/MaterialsTabUnselected')
MaterialsTabUnselectedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsTabUnselected card
include('elements/materials/Action/MaterialsTabUnselected')
MaterialsTabUnselectedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```