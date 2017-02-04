from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from server import views

# app_name = 'refs'
urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'^comment/$',
        views.CommentList.as_view(),
        name='comment-list'),
    url(r'^comment/(?P<pk>[0-9]+)/$',
        views.CommentDetail.as_view(),
        name='comment-detail'),
    url(r'^doctor/$',
        views.DoctorList.as_view(),
        name='doctor-list'),
    url(r'^doctor/(?P<pk>[0-9]+)/$',
        views.DoctorDetail.as_view(),
        name='doctor-detail'),
    url(r'^doctorpatient/$',
        views.DoctorPatientList.as_view(),
        name='doctorpatient-list'),
    url(r'^doctorpatient/(?P<pk>[0-9]+)/$',
        views.DoctorPatientDetail.as_view(),
        name='doctorpatient-detail'),
    url(r'^document/$',
        views.DocumentList.as_view(),
        name='document-list'),
    url(r'^document/(?P<pk>[0-9]+)/$',
        views.DocumentDetail.as_view(),
        name='document-detail'),
    url(r'^medication/$',
        views.MedicationList.as_view(),
        name='medication-list'),
    url(r'^medication/(?P<pk>[0-9]+)/$',
        views.MedicationDetail.as_view(),
        name='medication-detail'),
    url(r'^patient/$',
        views.PatientList.as_view(),
        name='patient-list'),
    url(r'^patient/(?P<pk>[0-9]+)/',
        views.PatientDetail.as_view(),
        name='patient-detail'),
    url(r'^symptom/$',
        views.SymptomList.as_view(),
        name='symptom-list'),
    url(r'^symptom/(?P<pk>[0-9]+)/',
        views.SymptomDetail.as_view(),
        name='symptom-detail'),
    url(r'^users/$',
        views.UserList.as_view(),
        name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$',
        views.UserDetail.as_view(),
        name='user-detail'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
])

# Login and logout views for the browsable API
urlpatterns += [
    url(r'api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
