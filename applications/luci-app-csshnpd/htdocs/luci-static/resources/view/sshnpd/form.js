'use strict';
'require view';
'require form';

// Project code format is tabs, not spaces
return view.extend({
	render: function() {
		var m, s, o;

		/*
		The first argument to form.Map() maps to the configuration file available
		via uci at /etc/config/. In this case, 'sshnpd' maps to /etc/config/sshnpd.

		If the file is completely empty, the form sections will indicate that the
		section contains no values yet. As such, your package installation (LuCI app
		or software that the app configures) should lay down a basic configuration
		file with all the needed sections.

		The relevant ACL path for reading a configuration with UCI this way is
		read > uci > ["example"]

		The relevant ACL path for writing back the configuration is
		write > uci > ["example"]
		*/
		m = new form.Map('sshnpd', _('NoPorts'),
			_('Daemon Configuration'));

		s = m.section(form.TypedSection, 'first', _('first section'));
		s.anonymous = true;

		s.option(form.Value, '@sshnpd[0].atsign', _('Device atSign'),
			_('The device atSign e.g. @device'));

		o = s.option(form.Flag, '@sshnpd[0].enabled', _('Enabled'),
			_('Check here to enable the service'));
		o.default = '1';
		o.rmempty = false;

		return m.render();
	},
});
