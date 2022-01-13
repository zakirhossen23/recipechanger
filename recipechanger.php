<?php

/**
 * Plugin Name: Recipe Changer
 * Plugin URI: https://miseitmakeit.ca/
 * Description: This is Recipe Changer plugin.
 * Author: Suzanne Lejeune
 * Author URI: https://miseitmakeit.ca/
 * Text Domain: recipechanger
 *
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'Changepage');
function Changepage()
{
    wp_enqueue_style('style', site_url() . "/wp-content/plugins/recipechanger" . '/includes/webpage/style.css', array(), false, 'all');
    wp_enqueue_script('recipepage', site_url() . "/wp-content/plugins/recipechanger" . '/includes/webpage/recipepage.js', [], [], true);
}

add_action('admin_init', 'Admin_Changepage');
function Admin_Changepage()
{
    wp_enqueue_script('admin_page', site_url() . "/wp-content/plugins/recipechanger" . '/includes/admin/admin_page.js', [], '1.0', true);
}
