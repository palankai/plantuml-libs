# AwsCommandLineInterface
```text
elements/aws/ManagementGovernance/AwsCommandLineInterface
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCommandLineInterface icon](../../../icons/aws/ManagementGovernance/AwsCommandLineInterface.png) | ![AwsCommandLineInterface element](AwsCommandLineInterface.element.png) | ![AwsCommandLineInterface card](AwsCommandLineInterface.card.png) |
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

' loads the AwsCommandLineInterface element
include('elements/aws/ManagementGovernance/AwsCommandLineInterface')
AwsCommandLineInterface('element', 'Command Line Interface', 'an optional tech field')
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

' loads the AwsCommandLineInterface element
include('elements/aws/ManagementGovernance/AwsCommandLineInterface')
AwsCommandLineInterface('element', 'Command Line Interface', 'an optional tech field')
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

' loads the AwsCommandLineInterface card
include('elements/aws/ManagementGovernance/AwsCommandLineInterface')
AwsCommandLineInterfaceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCommandLineInterface card
include('elements/aws/ManagementGovernance/AwsCommandLineInterface')
AwsCommandLineInterfaceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
