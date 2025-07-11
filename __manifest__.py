# -*- coding: utf-8 -*-
{
    'name': 'Resizable Sidebar',
    'version': '17.0.1.0.0',
    'summary': 'Allows users to resize the sidebar in Odoo.',
    'sequence': 10,
    'description': """
Resizable Sidebar
=================
This module allows users to resize the sidebar by dragging its edge. The chosen width is saved in the browser's local storage.
    """,
    'author': 'AMT',
    'website': 'https://www.yourcompany.com',
    'depends': ['web'],
    'category': 'Usability',
    'data': [],
    'assets': {
        'web.assets_backend': [
            'resizeable_sidebar/static/src/**/*',
        ],
    },
    'images': ['static/description/icon.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
    'price': 0.00,
    'currency': 'EUR',
    'license': 'LGPL-3',
}
