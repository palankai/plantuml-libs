# AzureVideo
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureVideo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVideo icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureVideo.png) | ![AzureVideo element](AzureVideo.element.png) | ![AzureVideo card](AzureVideo.card.png) |
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

' loads the AzureVideo element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureVideo')
AzureVideo('element', 'Video', 'an optional tech field')
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

' loads the AzureVideo element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureVideo')
AzureVideo('element', 'Video', 'an optional tech field')
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

' loads the AzureVideo card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureVideo')
AzureVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVideo card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureVideo')
AzureVideoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```