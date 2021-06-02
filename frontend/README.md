# Tera Code Challenge - FrontEnd

How Execute
  1. Add 'Web Server For Chrome' chrome extension.
  2. Download files
  3. inside Extension Choose Folder 'frontend'
  4. choose option "Enable Mod-rewrite (for SPA)", using default options
  5. Start Web Server
  6. Open default url: http://127.0.0.1:8887
  
  or 
  
  1. access http://renovel.empresarial.ws/vueApp/
 
Apache Router Configuration
	'/vueApp' is a base directory instead '/'
	<IfModule mod_rewrite.c>
	  RewriteEngine On
	  RewriteBase /vueApp
	  RewriteRule ^vueApp/index\.html$ - [L]
	  RewriteCond %{REQUEST_FILENAME} !-f
	  RewriteCond %{REQUEST_FILENAME} !-d
	  RewriteRule . /vueApp/index.html [L]
	</IfModule>
	
Obs
  -- without package/module manager
  -- without Node
  -- using httpVueLoader
