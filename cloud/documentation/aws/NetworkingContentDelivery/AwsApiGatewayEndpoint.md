# AwsApiGatewayEndpoint
```text
elements/aws/NetworkingContentDelivery/AwsApiGatewayEndpoint
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsApiGatewayEndpoint icon](../../../icons/aws/NetworkingContentDelivery/AwsApiGatewayEndpoint.png) | ![AwsApiGatewayEndpoint element](AwsApiGatewayEndpoint.element.png) | ![AwsApiGatewayEndpoint card](AwsApiGatewayEndpoint.card.png) |
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

' loads the AwsApiGatewayEndpoint element
include('elements/aws/NetworkingContentDelivery/AwsApiGatewayEndpoint')
AwsApiGatewayEndpoint('element', 'Api Gateway Endpoint', 'an optional tech field')
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

' loads the AwsApiGatewayEndpoint element
include('elements/aws/NetworkingContentDelivery/AwsApiGatewayEndpoint')
AwsApiGatewayEndpoint('element', 'Api Gateway Endpoint', 'an optional tech field')
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

' loads the AwsApiGatewayEndpoint card
include('elements/aws/NetworkingContentDelivery/AwsApiGatewayEndpoint')
AwsApiGatewayEndpointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsApiGatewayEndpoint card
include('elements/aws/NetworkingContentDelivery/AwsApiGatewayEndpoint')
AwsApiGatewayEndpointCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
