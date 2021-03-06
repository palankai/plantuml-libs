# MaterialsSpeaker
```text
elements/materials/Hardware/MaterialsSpeaker
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSpeaker icon](../../../icons/materials/Hardware/MaterialsSpeaker.png) | ![MaterialsSpeaker element](MaterialsSpeaker.element.png) | ![MaterialsSpeaker card](MaterialsSpeaker.card.png) |
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

' loads the MaterialsSpeaker element
include('elements/materials/Hardware/MaterialsSpeaker')
MaterialsSpeaker('element', 'Speaker', 'an optional tech field')
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

' loads the MaterialsSpeaker element
include('elements/materials/Hardware/MaterialsSpeaker')
MaterialsSpeaker('element', 'Speaker', 'an optional tech field')
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

' loads the MaterialsSpeaker card
include('elements/materials/Hardware/MaterialsSpeaker')
MaterialsSpeakerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSpeaker card
include('elements/materials/Hardware/MaterialsSpeaker')
MaterialsSpeakerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
