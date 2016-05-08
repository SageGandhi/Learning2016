package org.w3c.dom.html;

import org.w3c.dom.*;

/**
 * Unordered list. See the UL element definition in HTML 4.0.
 */
public interface HTMLUListElement extends HTMLElement {
  /**
   * Reduce spacing between list items. See the compact attribute definition 
   * in HTML 4.0. This attribute is deprecated in HTML 4.0.
   */
  public boolean            getCompact();
  public void               setCompact(boolean compact);
  /**
   * Bullet style. See the type attribute definition in HTML 4.0. This 
   * attribute is deprecated in HTML 4.0.
   */
  public String             getType();
  public void               setType(String type);
}

