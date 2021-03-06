# AwsIotMqttProtocol
```text
elements/aws/InternetOfThings/AwsIotMqttProtocol
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotMqttProtocol icon](../../../icons/aws/InternetOfThings/AwsIotMqttProtocol.png) | ![AwsIotMqttProtocol element](AwsIotMqttProtocol.element.png) | ![AwsIotMqttProtocol card](AwsIotMqttProtocol.card.png) |
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
include('styles/aws')

' loads the AwsIotMqttProtocol element
include('elements/aws/InternetOfThings/AwsIotMqttProtocol')
AwsIotMqttProtocol('element', 'Iot Mqtt Protocol', 'an optional tech field')
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
include('styles/aws')

' loads the AwsIotMqttProtocol element
include('elements/aws/InternetOfThings/AwsIotMqttProtocol')
AwsIotMqttProtocol('element', 'Iot Mqtt Protocol', 'an optional tech field')
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
include('styles/aws')

' loads the AwsIotMqttProtocol card
include('elements/aws/InternetOfThings/AwsIotMqttProtocol')
AwsIotMqttProtocolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsIotMqttProtocol card
include('elements/aws/InternetOfThings/AwsIotMqttProtocol')
AwsIotMqttProtocolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
