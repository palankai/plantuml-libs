# AwsNetworkingAndContentDelivery
```text
elements/aws/NetworkingContentDelivery/AwsNetworkingAndContentDelivery
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsNetworkingAndContentDelivery icon](../../../icons/aws/NetworkingContentDelivery/AwsNetworkingAndContentDelivery.png) | ![AwsNetworkingAndContentDelivery element](AwsNetworkingAndContentDelivery.element.png) | ![AwsNetworkingAndContentDelivery card](AwsNetworkingAndContentDelivery.card.png) |
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

' loads the AwsNetworkingAndContentDelivery element
include('elements/aws/NetworkingContentDelivery/AwsNetworkingAndContentDelivery')
AwsNetworkingAndContentDelivery('element', 'Networking And Content Delivery', 'an optional tech field')
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

' loads the AwsNetworkingAndContentDelivery element
include('elements/aws/NetworkingContentDelivery/AwsNetworkingAndContentDelivery')
AwsNetworkingAndContentDelivery('element', 'Networking And Content Delivery', 'an optional tech field')
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

' loads the AwsNetworkingAndContentDelivery card
include('elements/aws/NetworkingContentDelivery/AwsNetworkingAndContentDelivery')
AwsNetworkingAndContentDeliveryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsNetworkingAndContentDelivery card
include('elements/aws/NetworkingContentDelivery/AwsNetworkingAndContentDelivery')
AwsNetworkingAndContentDeliveryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
