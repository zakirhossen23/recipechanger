<?php

/**
 * Plugin Name: Recipe Changer V2
 * Plugin URI: shopitmiseitmakeit.ca
 * Description: This is Recipe Changer plugin.
 * Author: Suzanne Lejeune
 * Author URI: shopitmiseitmakeit.ca
 * Text Domain: recipechanger
 * Version: 1.0.0.2
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'Changepage');
function Changepage()
{
    wp_enqueue_style('style',plugin_dir_url( __FILE__ ) . '/includes/webpage/style.css', array(), filemtime(plugin_dir_url( __FILE__ ) . '/includes/webpage/style.css'));
    wp_enqueue_script('recipepage',plugin_dir_url( __FILE__ ) . '/includes/webpage/recipepage.js', [],  filemtime(plugin_dir_url( __FILE__ ) . '/includes/webpage/recipepage.js'), true);
}

add_action('admin_init', 'Admin_Changepage');
function Admin_Changepage()
{
    wp_enqueue_script('admin_page',plugin_dir_url( __FILE__ ) . '/includes/admin/admin_page.js', [], '1.0', true);
}
