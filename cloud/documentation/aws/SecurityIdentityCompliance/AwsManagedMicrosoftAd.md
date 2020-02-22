# AwsManagedMicrosoftAd
```text
elements/aws/SecurityIdentityCompliance/AwsManagedMicrosoftAd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsManagedMicrosoftAd icon](../../../icons/aws/SecurityIdentityCompliance/AwsManagedMicrosoftAd.png) | ![AwsManagedMicrosoftAd element](AwsManagedMicrosoftAd.element.png) | ![AwsManagedMicrosoftAd card](AwsManagedMicrosoftAd.card.png) |
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

' loads the AwsManagedMicrosoftAd element
include('elements/aws/SecurityIdentityCompliance/AwsManagedMicrosoftAd')
AwsManagedMicrosoftAd('element', 'Managed Microsoft Ad', 'an optional tech field')
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

' loads the AwsManagedMicrosoftAd element
include('elements/aws/SecurityIdentityCompliance/AwsManagedMicrosoftAd')
AwsManagedMicrosoftAd('element', 'Managed Microsoft Ad', 'an optional tech field')
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

' loads the AwsManagedMicrosoftAd card
include('elements/aws/SecurityIdentityCompliance/AwsManagedMicrosoftAd')
AwsManagedMicrosoftAdCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsManagedMicrosoftAd card
include('elements/aws/SecurityIdentityCompliance/AwsManagedMicrosoftAd')
AwsManagedMicrosoftAdCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```