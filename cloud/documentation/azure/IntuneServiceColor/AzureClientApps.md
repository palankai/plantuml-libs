# AzureClientApps
```text
elements/azure/IntuneServiceColor/AzureClientApps
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureClientApps icon](../../../icons/azure/IntuneServiceColor/AzureClientApps.png) | ![AzureClientApps element](AzureClientApps.element.png) | ![AzureClientApps card](AzureClientApps.card.png) |
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
include('styles/azure')

' loads the AzureClientApps element
include('elements/azure/IntuneServiceColor/AzureClientApps')
AzureClientApps('element', 'Client Apps', 'an optional tech field')
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
include('styles/azure')

' loads the AzureClientApps element
include('elements/azure/IntuneServiceColor/AzureClientApps')
AzureClientApps('element', 'Client Apps', 'an optional tech field')
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
include('styles/azure')

' loads the AzureClientApps card
include('elements/azure/IntuneServiceColor/AzureClientApps')
AzureClientAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureClientApps card
include('elements/azure/IntuneServiceColor/AzureClientApps')
AzureClientAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
