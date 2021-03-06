# AwsTransitGateway
```text
elements/aws/NetworkingContentDelivery/AwsTransitGateway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsTransitGateway icon](../../../icons/aws/NetworkingContentDelivery/AwsTransitGateway.png) | ![AwsTransitGateway element](AwsTransitGateway.element.png) | ![AwsTransitGateway card](AwsTransitGateway.card.png) |
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

' loads the AwsTransitGateway element
include('elements/aws/NetworkingContentDelivery/AwsTransitGateway')
AwsTransitGateway('element', 'Transit Gateway', 'an optional tech field')
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

' loads the AwsTransitGateway element
include('elements/aws/NetworkingContentDelivery/AwsTransitGateway')
AwsTransitGateway('element', 'Transit Gateway', 'an optional tech field')
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

' loads the AwsTransitGateway card
include('elements/aws/NetworkingContentDelivery/AwsTransitGateway')
AwsTransitGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsTransitGateway card
include('elements/aws/NetworkingContentDelivery/AwsTransitGateway')
AwsTransitGatewayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
