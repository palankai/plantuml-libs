# MaterialsAlarm
```text
elements/materials/Action/MaterialsAlarm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAlarm icon](../../../icons/materials/Action/MaterialsAlarm.png) | ![MaterialsAlarm element](MaterialsAlarm.element.png) | ![MaterialsAlarm card](MaterialsAlarm.card.png) |
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

' loads the MaterialsAlarm element
include('elements/materials/Action/MaterialsAlarm')
MaterialsAlarm('element', 'Alarm', 'an optional tech field')
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

' loads the MaterialsAlarm element
include('elements/materials/Action/MaterialsAlarm')
MaterialsAlarm('element', 'Alarm', 'an optional tech field')
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

' loads the MaterialsAlarm card
include('elements/materials/Action/MaterialsAlarm')
MaterialsAlarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAlarm card
include('elements/materials/Action/MaterialsAlarm')
MaterialsAlarmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
