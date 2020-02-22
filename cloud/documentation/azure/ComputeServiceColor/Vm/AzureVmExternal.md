# AzureVmExternal
```text
elements/azure/ComputeServiceColor/Vm/AzureVmExternal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVmExternal icon](../../../../icons/azure/ComputeServiceColor/Vm/AzureVmExternal.png) | ![AzureVmExternal element](AzureVmExternal.element.png) | ![AzureVmExternal card](AzureVmExternal.card.png) |
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

' loads the AzureVmExternal element
include('elements/azure/ComputeServiceColor/Vm/AzureVmExternal')
AzureVmExternal('element', 'Vm External', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureVmExternal element
include('elements/azure/ComputeServiceColor/Vm/AzureVmExternal')
AzureVmExternal('element', 'Vm External', 'an optional tech field')
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

' loads the AzureVmExternal card
include('elements/azure/ComputeServiceColor/Vm/AzureVmExternal')
AzureVmExternalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureVmExternal card
include('elements/azure/ComputeServiceColor/Vm/AzureVmExternal')
AzureVmExternalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```