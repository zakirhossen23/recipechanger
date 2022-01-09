<?php

/**
 * Plugin Name: Recipe Changer
 * Version: 1.0.0
 * Plugin URI: https://miseitmakeit.ca/
 * Description: This is Recipe Changer plugin.
 * Author: Suzanne Lejeune
 * Author URI: https://miseitmakeit.ca/
 * Text Domain: recipechanger
 *
 * @package WordPress
 * @author Suzanne Lejeune
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'Changepage');
function Changepage()
{
    wp_enqueue_style('style', site_url() . "/wp-content/plugins/recipechanger" . '/includes/webpage/style.css', array(), false, 'all');
    wp_enqueue_script('recipepage', site_url() . "/wp-content/plugins/recipechanger" . '/includes/webpage/recipepage.js', [], '1.0', true);
}
