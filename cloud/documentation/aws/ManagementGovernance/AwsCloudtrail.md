# AwsCloudtrail
```text
elements/aws/ManagementGovernance/AwsCloudtrail
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudtrail icon](../../../icons/aws/ManagementGovernance/AwsCloudtrail.png) | ![AwsCloudtrail element](AwsCloudtrail.element.png) | ![AwsCloudtrail card](AwsCloudtrail.card.png) |
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

' loads the AwsCloudtrail element
include('elements/aws/ManagementGovernance/AwsCloudtrail')
AwsCloudtrail('element', 'Cloudtrail', 'an optional tech field')
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

' loads the AwsCloudtrail element
include('elements/aws/ManagementGovernance/AwsCloudtrail')
AwsCloudtrail('element', 'Cloudtrail', 'an optional tech field')
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

' loads the AwsCloudtrail card
include('elements/aws/ManagementGovernance/AwsCloudtrail')
AwsCloudtrailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudtrail card
include('elements/aws/ManagementGovernance/AwsCloudtrail')
AwsCloudtrailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
