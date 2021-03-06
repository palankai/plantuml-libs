# GcpCloudDataproc
```text
elements/gcp/DataAnalytics/GcpCloudDataproc
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDataproc icon](../../../icons/gcp/DataAnalytics/GcpCloudDataproc.png) | ![GcpCloudDataproc element](GcpCloudDataproc.element.png) | ![GcpCloudDataproc card](GcpCloudDataproc.card.png) |
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
include('styles/gcp')

' loads the GcpCloudDataproc element
include('elements/gcp/DataAnalytics/GcpCloudDataproc')
GcpCloudDataproc('element', 'Cloud Dataproc', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpCloudDataproc element
include('elements/gcp/DataAnalytics/GcpCloudDataproc')
GcpCloudDataproc('element', 'Cloud Dataproc', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpCloudDataproc card
include('elements/gcp/DataAnalytics/GcpCloudDataproc')
GcpCloudDataprocCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/gcp')

' loads the GcpCloudDataproc card
include('elements/gcp/DataAnalytics/GcpCloudDataproc')
GcpCloudDataprocCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
