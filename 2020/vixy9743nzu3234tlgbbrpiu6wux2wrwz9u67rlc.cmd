copy /Y C:\_Projects\_Local\EnvName-14101\10.2.400.22\Deployment\Server\CSG\*dll C:\_Projects\_Local\EnvName-14101\10.2.400.4\Deployment\Server\CSG
copy /Y C:\_Projects\_Local\EnvName-14101\10.2.400.22\Deployment\Server\CSG\*pdb C:\_Projects\_Local\EnvName-14101\10.2.400.4\Deployment\Server\CSG
C:\Windows\System32\inetsrv\appcmd recycle apppool /apppool.name:EnvName-14101-10.2.400.22
C:\Windows\System32\inetsrv\appcmd recycle apppool /apppool.name:EnvName-14101-10.2.400.4
